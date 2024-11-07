'use client'
import { useState } from 'react';

const CevapPage = () => {
    const [adSoyad, setAdSoyad] = useState('');
    const [sinif, setSinif] = useState('');
    const [katilimDurumu, setKatilimDurumu] = useState(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/addStudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ad_soyad: adSoyad, sinif, katilim_durumu: katilimDurumu }),
        });
        setAdSoyad('');
        setSinif('');
        setKatilimDurumu(0);
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white border-2 border-yellow-300 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">YOKLAMA</h2>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label htmlFor="adSoyad" className="block font-medium mb-1">Ad-Soyad</label>
                            <input
                                type="text"
                                placeholder=""
                                value={adSoyad}
                                onChange={(e) => setAdSoyad(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="sinif" className="block font-medium mb-1">Sınıf</label>
                            <input
                                type="text"
                                placeholder=""
                                value={sinif}
                                onChange={(e) => setSinif(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="katilim" className="font-medium">Bugünkü derse katıldınız mı?</label>
                        <input
                            type="number"
                            placeholder=""
                            value={katilimDurumu}
                            onChange={(e) => setKatilimDurumu(parseInt(e.target.value))}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        />
                    </div>
                    <div className="text-center">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                            Kaydet
                        </button>
                    </div>

                    <h6 className=" text-gray-400 text-[13px] flex justify-between mt-5">Eğer derse katıldıysanız katılım durumunu "1", eğer derse katılmadıysanız katılım durumunu "0" olarak işaretleyiniz.</h6>
                </div>
            </div>
        </form >
    );
};

export default CevapPage;
