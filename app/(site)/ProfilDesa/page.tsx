import Image from "next/image";
import SidebarLink from "@/components/Docs/SidebarLink";

export default function DocsPage() {
  return (
    <>
      <title>Profil Desa</title>

      <section className="pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2>Profil Singkat Desa Banjarsari</h2>
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[60/60] w-full sm:aspect-[60/60]">
                    <Image
                      src={"/images/Profil/Profil.jpg"}
                      alt="KKN2024 UNIPI Banjarsari"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <p className="text-base text-body-color dark:text-body-color-dark">
                  Desa Banjarsari merupakan Desa yang berada di dalam
                  wilayah Kecamatan Bayongbong, Kabupaten Garut, yang
                  terdiri dari ................
                </p>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
