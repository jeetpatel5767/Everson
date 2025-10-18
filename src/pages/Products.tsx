import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import shoppingBag from "@/assets/pro1.png";
import shoesBags from "@/assets/pro2.png";
import tableCoverProduct from "@/assets/pro3.png";
import laundryBagProduct from "@/assets/pro4.png";
import zipBag from "@/assets/pro5.png";
import carryBag from "@/assets/pro6.png";
import pillowCover from "@/assets/pro7.png";
import giftWrapping from "@/assets/pro8.png";
import antiStaticBag from "@/assets/pro9.png";
import rollsProduct from "@/assets/pro10.png";

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
        { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },
      ],
    },
    {
      name: "Shoes Bags",
      image: shoesBags,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Table Cover",
      image: tableCoverProduct,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Laundry Bag",
      image: laundryBagProduct,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Zip Bag",
      image: zipBag,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Carry Bag",
      image: carryBag,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Pillow Cover",
      image: pillowCover,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Gift Wrapping",
      image: giftWrapping,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Anti Static Bag",
      image: antiStaticBag,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

      ],
    },
    {
      name: "Non-woven rolls",
      image: rollsProduct,
      specs: [
 { bagSize: "9*12", gsm: "40+40", unitMob: "", gsmAlt: "" },
        { bagSize: "10*14", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*16", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "12*18", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "14*19", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*21", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "16*24", gsm: "", unitMob: "", gsmAlt: "" },
        { bagSize: "18*26", gsm: "", unitMob: "", gsmAlt: "" },

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
      className="border border-[#394D57] bg-white overflow-hidden grid grid-cols-1 md:grid-cols-[320px_1fr]"
    >
      {/* Left Side - Image & Product Name */}
      <div className="flex flex-col items-center justify-center border-r border-[#394D57] bg-white">
        <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="py-3 w-full text-center font-medium text-muted-foreground border-t border-[#394D57]">
          {product.name}
        </p>
      </div>

      {/* Right Side - Table */}
      <div className="w-full">
        <table className="w-full border-collapse border border-[#394D57] text-sm text-center">
          <thead>
            <tr className="border-b-2 border-[#394D57]">
              <th className="px-4 py-3 font-semibold border-r border-[#394D57]">
                Bag Size
              </th>
              <th className="px-4 py-3 font-semibold border-r border-[#394D57]">
                GSM
              </th>
              <th className="px-4 py-3 font-semibold border-r border-[#394D57]">
                Jumbo Bags
              </th>
              <th className="px-4 py-3 font-semibold">
                GSM
              </th>
            </tr>
          </thead>

          <tbody>
            {product.specs.map((spec, specIndex) => (
              <tr key={specIndex} className="hover:bg-muted/10">
                <td className="px-4 py-2">{spec.bagSize}</td>
                <td className="px-4 py-2">{spec.gsm}</td>
                <td className="px-4 py-2">{spec.unitMob}</td>
                <td className="px-4 py-2">{spec.gsmAlt}</td>
              </tr>
            ))}

            {/* Footer Row */}
            <tr className="border-t-2 border-[#394D57] bg-[#f5f5f5]">
              <td colSpan={4} className="px-4 py-3 italic">
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
