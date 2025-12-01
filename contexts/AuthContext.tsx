"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface AuthContextType {
    user: User | null;
    userRole: string | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signInWithFacebook: () => Promise<void>;
    signInWithLinkedIn: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                // Vérifier le rôle dans Firestore
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setUserRole(userDoc.data().role);
                } else {
                    // Créer un nouvel utilisateur avec rôle par défaut
                    await setDoc(doc(db, 'users', user.uid), {
                        email: user.email,
                        role: 'client',
                        createdAt: new Date(),
                        subscription: 'none'
                    });
                    setUserRole('client');
                }
            } else {
                setUser(null);
                setUserRole(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    // ✅ Connexion avec Google
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        // Créer ou mettre à jour le document utilisateur
        await setDoc(
            doc(db, 'users', result.user.uid),
            {
                email: result.user.email,
                role: 'client',
                createdAt: new Date(),
                subscription: 'none',
                lastLogin: new Date()
            },
            { merge: true }
        );
    };

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        const result = await signInWithPopup(auth, provider);

        await setDoc(
            doc(db, 'users', result.user.uid),
            {
                email: result.user.email,
                role: 'client',
                createdAt: new Date(),
                subscription: 'none',
                lastLogin: new Date()
            },
            { merge: true }
        );
    };

    const signInWithLinkedIn = async () => {
        const provider = new OAuthProvider('linkedin.com');
        const result = await signInWithPopup(auth, provider);

        await setDoc(
            doc(db, 'users', result.user.uid),
            {
                email: result.user.email,
                role: 'client',
                createdAt: new Date(),
                subscription: 'none',
                lastLogin: new Date()
            },
            { merge: true }
        );
    };

    const logout = async () => {
        await signOut(auth);
    };

    const value = {
        user,
        userRole,
        loading,
        signIn,
        signInWithGoogle, // ✅ remplace GitHub par Google
        signInWithFacebook,
        signInWithLinkedIn,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
