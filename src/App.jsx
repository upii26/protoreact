import DataImage from "./data";
import { listTools, listProyek, listgallery } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInDownBig animate__delay-20s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <q>Semua Dalam Hitungan 🔥🔥</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hello, My Name Is luthfi.
          </h1>
          <p className="text-base/loose text-justify mb-6 opacity-50">
            Saya adalah seorang programmer di bidang Informatika dengan minat
            dan keahlian dalam desain, analisis data, penetration testing, dan
            pengembangan perangkat lunak. Saya memiliki pengalaman dalam
            pengembangan frontend dan backend, desain UI/UX, desain grafis,
            serta data mining. Dengan kemampuan tersebut, saya dapat menciptakan
            solusi yang kreatif dan efektif sesuai kebutuhan. Saya dikenal
            sebagai individu yang bertanggung jawab terhadap tugas yang
            diberikan, memiliki tingkat disiplin yang tinggi, serta mampu
            bekerja sama dalam tim dan berkomunikasi secara efektif.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={DataImage.cv}
              download="CV_Luthfi.pdf"
              className="bg-yellow-500 p-4 rounded-2xl hover:bg-yellow-400"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-300"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[600px] rounded-4xl md:ml-auto animate__animated animate__fadeInRight animate__delay-20s"
          loading="lazy"
        />
      </div>

      <div className="tentang mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          /> */}
          <p className="text-base/loose mb-10 text-justify">
            Saya merupakan alumni program studi Informatika dari Universitas
            Sanata Dharma. Saat ini, saya sedang melanjutkan pendidikan di
            Universitas Islam Indonesia dengan tujuan untuk lebih mendalami
            bidang informatika serta memperluas pengetahuan saya di bidang
            teknologi. Saya dikenal sebagai pribadi yang bertanggung jawab
            terhadap setiap tugas yang diberikan, memiliki pola pikir adaptif
            terhadap lingkungan, serta mampu bekerja sama dalam tim dan
            berkomunikasi secara efektif. Selain itu, saya juga dapat bekerja
            secara profesional, dengan kemampuan untuk membedakan antara urusan
            pekerjaan dan hal-hal di luar pekerjaan.
          </p>
          <div className="flex items-center justify-between">
            <p className="w-12 rounded-md sm:block hidden"></p>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-yellow-400">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-yellow-400">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Language & Tools
          </h1>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tools) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tools.id}
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay={tools.dad}
              >
                <img
                  src={tools.gambar}
                  alt="Tools Images"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tools.nama}</h4>
                  <p className="opacity-90 text-yellow-300">{tools.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  {listgallery.map((desain, index) => (
    <div
      key={index}
      className=" p-2 rounded-lg shadow-lg flex items-center justify-center"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay={desain.delay}
    >
      <img
        src={desain.gambar}
        alt={`Design ${index + 1}`}
        className="max-w-full max-h-[500px] object-contain"
        loading="lazy"
      />
    </div>
  ))}
</div>


      <div className="proyek mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Project
        </h1>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-700 rounded-md"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tools, index) => (
                    <p
                      className="py-1 px-3 border border-yellow-400 rounded-md bg-yellow-400 font-semibold"
                      key={index}
                    >
                      {tools}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    className="bg-yellow-500 p-3 rounded-lg block border border-amber-300 hover:bg-amber-500"
                  >
                    See Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Contact Us
        </h1>
        <form
          action="https://formsubmit.co/balefighet@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <labe className="font-semibold">Nama Lengkap</labe>
              <input
                type="text"
                name="nama"
                placeholder="Enter Full Name"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="Enter Ur Message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-cennter">
              <button
                className="bg-yellow-500 p-3 rounded-lg w-full cursor-pointer border border-amber-300 hover:bg-amber-500"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
