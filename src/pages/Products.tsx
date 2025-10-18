import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import shoppingBag from "@/assets/shopping-bag-product.jpg";
import shoesBags from "@/assets/shoes-bags-product.jpg";
import tableCoverProduct from "@/assets/table-cover-product.jpg";
import laundryBagProduct from "@/assets/laundry-bag-product.jpg";
import zipBag from "@/assets/zip-bag-product.jpg";
import carryBag from "@/assets/carry-bag-product.jpg";
import pillowCover from "@/assets/pillow-cover-product.jpg";
import giftWrapping from "@/assets/gift-wrapping-product.jpg";
import antiStaticBag from "@/assets/anti-static-bag-product.jpg";
import rollsProduct from "@/assets/rolls-product.jpg";

interface ProductSpec {
  bagSize: string;
  gsm: string;
  unitMob: string;
  gsmAlt?: string;
}

interface Product {
  name: string;
  image: string;
  specs: ProductSpec[];
}

const Products = () => {
  const products: Product[] = [
    {
      name: "Shopping bag",
      image: shoppingBag,
      specs: [
        { bagSize: "8*10", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Shoes Bags",
      image: shoesBags,
      specs: [
        { bagSize: "8*10", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Table Cover",
      image: tableCoverProduct,
      specs: [
        { bagSize: "60*90", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "90*90", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "54*108", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "60*120", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "70*120", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "90*90", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Laundry Bag",
      image: laundryBagProduct,
      specs: [
        { bagSize: "18*24", gsm: "60+20", unitMob: "", gsmAlt: "" },
        { bagSize: "20*28", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "22*30", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "24*36", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "28*40", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "30*40", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Zip Bag",
      image: zipBag,
      specs: [
        { bagSize: "8*10", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Carry Bag",
      image: carryBag,
      specs: [
        { bagSize: "8*10", gsm: "60+20", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Pillow Cover",
      image: pillowCover,
      specs: [
        { bagSize: "16*24", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "18*28", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "20*30", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "20*26", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "17*27", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*28", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Gift Wrapping",
      image: giftWrapping,
      specs: [
        { bagSize: "8*10", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Anti Static Bag",
      image: antiStaticBag,
      specs: [
        { bagSize: "8*10", gsm: "60+20", unitMob: "", gsmAlt: "" },
        { bagSize: "10*12", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*18", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Non-woven rolls",
      image: rollsProduct,
      specs: [
        { bagSize: "Width", gsm: "GSM", unitMob: "", gsmAlt: "" },
        { bagSize: "80 cm", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "160 cm", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "240 cm", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "320 cm", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-8xl">
          {/* Header: Title + Description Side by Side */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-8">
            <div>
              <h1 className="text-6xl font-bold text-foreground">EVERSON</h1>
              <h2 className="text-4xl font-semibold text-foreground">
                Products
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl text-xl">
              Carry Your Brand with Unmatched Quality. Discover our premium
              non-woven bags designed for durability, perfected for your
              branding, and crafted to make every carry a statement of
              excellence.
            </p>
          </div>

          {/* Products Catalog */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-border bg-white overflow-hidden grid grid-cols-1 md:grid-cols-[320px_1fr]"
              >
                {/* Left Side - Image & Product Name */}
                <div className="flex flex-col items-center justify-center border-r border-border bg-white">
                  <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="py-3 w-full text-center font-medium text-muted-foreground border-t border-border">
                    {product.name}
                  </p>
                </div>

                {/* Right Side - Table */}
                <div className="w-full">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="border-r border-b border-border px-4 py-3 text-left font-semibold">
                          Bag Size
                        </th>
                        <th className="border-r border-b border-border px-4 py-3 text-left font-semibold">
                          GSM
                        </th>
                        <th className="border-r border-b border-border px-4 py-3 text-left font-semibold">
                          Jumbo Bags
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold">
                          GSM
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {product.specs.map((spec, specIndex) => (
                        <tr key={specIndex} className="hover:bg-muted/10">
                          <td className="border-r border-b border-border px-4 py-2 text-sm">
                            {spec.bagSize}
                          </td>
                          <td className="border-r border-b border-border px-4 py-2 text-sm">
                            {spec.gsm}
                          </td>
                          <td className="border-r border-b border-border px-4 py-2 text-sm">
                            {spec.unitMob}
                          </td>
                          <td className="border-b border-border px-4 py-2 text-sm">
                            {spec.gsmAlt}
                          </td>
                        </tr>
                      ))}

                      {/* Footer Row */}
                      <tr className="bg-muted/10">
                        <td
                          colSpan={4}
                          className="border-t border-border px-4 py-3 italic text-muted-foreground"
                        >
                          Customize Size Also Available
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
