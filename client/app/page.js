'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useEffect } from 'react';
import '@/app/globals.css';

export default function Home() {
    useEffect(() => {}, []);
    return (
        <main>
            <div className='class="min-h-full"'>
                <Navbar />
            </div>
            <h1>Home Page</h1>
        </main>
    );
}
