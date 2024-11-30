import { Catalog } from "src/components/catalog";
import { Faq } from "src/components/faq";
import { HeaderCatalog } from "src/components/headerCatalog";
import useTitle from "../hook/useTitle";

const Catalogpage = () => {
  useTitle("Catalog | Goods4you");

  return (
    <div className="container">
      <div className="container__header">
        <HeaderCatalog />
      </div>
      <div id="Catalog" className="container__catalog">
        <Catalog />
      </div>
      <div id="FAQ" className="container__faq">
        <Faq />
      </div>
    </div>
  );
};

export default Catalogpage;
