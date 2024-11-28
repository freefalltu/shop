import useTitle from "../hook/useTitle";
import Catalog from "../components/catalog/Catalog";
import Faq from "../components/faq/Faq";
import HeaderCatalog from "../components/headerCatalog/HeaderCatalog";

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
