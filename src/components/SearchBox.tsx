"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter();

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!search) {
            return;
        }
        router.push(`/search/${search}`)
    }
    
    return (
        <div>
            <form 
                className="flex max-w-6xl mx-auto justify-between items-center px-5"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Procurar por palavras chaves..." 
                    className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button 
                    type="submit" 
                    className="text-amber-600 disabled:text-gray-400"
                    disabled={!search}
                >Buscar</button>
            </form>
        </div>
    )
}
