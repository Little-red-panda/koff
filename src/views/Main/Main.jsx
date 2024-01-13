import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { CATALOG } from "../../const";

export const Main = () => (
  <main>
    <Catalog catalog={CATALOG} />
    <Goods />
  </main>
);
