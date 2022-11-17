import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

const Shop = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Shop;
