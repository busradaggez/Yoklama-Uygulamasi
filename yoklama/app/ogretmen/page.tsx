'use client' // Bu satır, bileşenin client-side'da çalışmasını sağlar
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13'te yönlendirme için `next/navigation` kullanılır

interface Student {
    id: number;
    ad_soyad: string;
    sinif: string;
    katilim_durumu: string;
}

const OgretmenPage = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const router = useRouter(); // `useRouter` ile yönlendirme işlemi yapılır

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch('/api/getStudents');
            const data = await response.json();
            setStudents(data);
        };

        fetchStudents();
    }, []);

    // Yönlendirme işlevi
    const handleRedirect = () => {
        router.push('/Home'); // CevapPage sayfasına yönlendirme
    };

    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white border-2 border-yellow-300 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">ÖĞRENCİ LİSTESİ</h2>

                    {/* Başlıklar için grid düzeni */}
                    <div className="grid grid-cols-4 gap-8 font-bold text-center mb-4">
                        <div>Öğrenci Numarası</div>
                        <div>Ad-Soyad</div>
                        <div>Sınıf</div>
                        <div>Katılım Durumu</div>
                    </div>

                    {/* Öğrencilerin verileri için grid düzeni */}
                    {students.map((student) => (
                        <div key={student.id} className="grid grid-cols-4 gap-8 text-center mb-2">
                            <div>{student.id}</div> {/* Öğrenci Numarası */}
                            <div>{student.ad_soyad}</div>
                            <div>{student.sinif}</div>
                            <div>{student.katilim_durumu}</div>
                        </div>
                    ))}

                    {/* Öğrenci sayfasına yönlendirme butonu */}
                    <div className="text-center mt-10">
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                            onClick={handleRedirect}
                        >
                            Öğrenci Sayfasına Dön
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OgretmenPage;
