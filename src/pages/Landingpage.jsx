import React, {useContext} from 'react'
import AnswerCard from '../components/AnswerCard'
import Button from '../components/Button'
import DesktopActiveButton2 from '../components/DesktopActiveButton2'
import LandingNavbar from '../components/LandingNavbar'
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom'
import LandingButton1 from '../components/LandingButton1'
import LandingButton11 from '../components/LandingButton11'
import TestiCard from '../components/TestiCard'

const Landingpage = () => {
    const history = useHistory()

    const { user, isLoading } = useContext(UserContext);
    console.log(user, isLoading);

    if(user) {
        history.push("/home")
    }

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold pb-12">Perawatan yang tepat di waktu yang tepat.</div>
                </div>
                <img className="w-full" src="homepict.svg" alt="" />
                <div className="py-24 px-6">
                    <div className="text-center pb-12">scroll untuk melihat lebih lanjut.</div>
                    <div className="pt-16">
                        <div className="font-bold mb-2">Siapa Kami?</div>
                        <div className="text-gray-500 text-sm leading-relaxed">GoCure Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. GoCure Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.</div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Layanan yang kami tawarkan?</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Kenapa kami?</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Sedikit testimoni dari user kami</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                                <LandingButton1 pic="konseling.svg" url="/"/>
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="topbar w-full">
                    <LandingNavbar />
                </div>
                <img src="desktoplanding.svg" alt="" className='fixxxed' />
                <div className="px-12 xl:px-24 2xl:px-48 py-20 lg:py-28 xl:py-36 2xl:py-56">
                    <div className="bg-white p-6 w-96 rounded-lg">
                        <div className="text-xl font-bold">
                            Perawatan yang tepat di waktu yang tepat.
                        </div>
                        <div className=" mt-2 pb-8">
                            Platform kami memberdayakan orang-orang dengan alat digital yang didukung secara klinis untuk secara proaktif meningkatkan kesejahteraan mental.
                        </div>
                        <Button
                            title="Daftar Sekarang"
                            url="/register"
                        />
                    </div>
                </div>
                <div className="pt-32 px-12 lg:px-16 xl:px-24 2xl:px-48">
                    <div className="flex items-center md:gap-x-8 xl:gap-x-16">
                        <div className='flex flex-col w-2/3'>
                            <div className="text-xl font-bold">
                                Siapa kami?
                            </div>
                            <div className="mt-2 leading-relaxed">
                                GoCure merupakan sebuah klinik layanan psikologi yang berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. GoCure Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.
                            </div>
                            <div className="flex">
                                <div className="border-b border-white hover:border-blue-600">
                                    <div className="mt-8 text-blue-600 md:text-base xl:text-lg leading-relaxed cursor-pointer">
                                        Tentang Kami →
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="landing1.jpg" alt="" className='object-cover w-1/2' />
                    </div>
                </div>
                <div className="px-12 lg:px-16 xl:px-24 2xl:px-48">
                    <div className="pt-32">
                        <div className="text-xl font-bold">
                            Layanan Kami
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-6">
                            <LandingButton1 
                                pic="konseling.svg"
                                title="Konseling"
                                desc="disini anda bisa melakukan penanganan kesehatan mental anda dengan orang yang terpercaya dan ahli dibidangnya." 
                                url="/screening"
                            />
                            <LandingButton1 
                                pic="webinar.svg"
                                title="Webinar"
                                desc="disini anda bisa mengikuti kegiatan webinar bertajuk kesehatan mental bersama narasumber ahli dan terpercaya." 
                                url="/webinar"
                            />
                            <LandingButton1 
                                pic="blog.svg"
                                title="Blog"
                                desc="disini anda bisa membaca ragam artikel dan blog untuk menambah awareness anda tentang kesehatan mental." 
                                url="/blogs"
                            />
                            <LandingButton1 
                                pic="tes.svg"
                                title="Tes kesehatan"
                                desc="disini anda juga dapat melakukan tes kesehatan agar anda mengetahui kondisi dari kesehatan mental anda saat ini." 
                                url="/healthtest"
                            />
                        </div>
                        <div className="pt-8 flex justify-center">
                            <DesktopActiveButton2
                                title="Pelajari Lebih Lanjut"
                                url="/landinginfo"
                            />
                        </div>
                    </div>
                    <div className="pt-32">
                        <div className="text-xl font-bold">
                            Kenapa Kami?
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-6">
                            <LandingButton11
                                pic="konseling.svg"
                                title="24 jam pelayanan konsumen"
                                desc="GoCure hadir dengan memberikan pelayanan sepenuh hati kepada konsumen. Siap melayani konsumen kapanpun user inginkan." 
                            />
                            <LandingButton11 
                                pic="konseling.svg"
                                title="SDM yang ahli dibidangnya"
                                desc="Kami bekerjasama dengan tenaga yang ahli dibidangnya, tidak hanya mendengarkan, tetapi juga memberikan saran dan solusi yang terbaik untuk konsumen." 
                            />
                            <LandingButton11 
                                pic="konseling.svg"
                                title="aksesibilitas yang mudah"
                                desc="GoCure dibuat dengan antarmuka dengan aksesibilitas yang menarik dan sangat user friendly untuk memudahkan pengguna mengakses website kami." 
                            />
                            <LandingButton11 
                                pic="konseling.svg"
                                title="proses konseling yang cepat"
                                desc="tidak perlu untuk menunggu lama, jadwal konsultasimu akan segera dikirim melalui email yang didaftarkan, karena kami akan segera mencocokkan dan membalas pesanmu dengan cepat." 
                            />
                        </div>
                    </div>
                    <div className="py-32">
                        <div className="text-xl font-bold">
                            Sedikit testimoni dari kami
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-16 pt-8">
                            <TestiCard
                                pic="randomavatar-1.png"
                                name="Brian Jaski • Mahasiswa"
                                desc="Saya mahasiswa tingkat akhir yang masih ngurusin skripsian. Selalu ditanya kapan selesai, selalu dibilang jadi beban ortu. Hal itu membuat saya depresi. Saya tipe orang yang sulit untuk bercerita ke orang lain, namun di GoCure ini, dengan sangat mudah saya bercerita mengenai kondisi yang saya alami, seiring berjalannya waktu depresi saya berkurang dan akhirnya skripsi sayapun selesai." 
                            />
                            <TestiCard
                                pic="randomavatar-2.png"
                                name="Lukas Sebastian • Orang Tua"
                                desc="Konsultasi dengan psikolog dari GoCure sangat nyaman, aman, dan penuh pengertian sekali. Saya mengonsultasikan anak saya yang kondisinya berbeda dengan teman - temannya. Saya tidak menyadari bahwa dia mengidap penyakit diseleksia. Walaupun agak terlambat mengetahui kondisi tersebut, tapi setidaknya dia sedang di masa pemulihan." 
                            />
                            <TestiCard
                                pic="randomavatar-4.png"
                                name="Maria Malva • Pelajar"
                                desc="Ga nyangka bangett ternyata kondisi aku suka anehh kadang aku ngerasa pengen nangis, ketawa, dan marah di satu waktu. Karna penasaran dengan kondisiku yang kek gini, akhirnya aku coba untuk konsultasi dengan psikolog dari GoCure. Dan hasilnya uwaww ternyata kondisi aku ga baik baik ajaa, beberapa kali pertemuan sekaranggg aku udah beneran baik baik aja" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
