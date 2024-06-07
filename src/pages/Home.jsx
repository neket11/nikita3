import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

export function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories); // Добавлено для инициализации отфильтрованного каталога
        });
    }, []);

    const handleSearch = (value) => {
        if (value.trim() !== "") {
            const filtered = catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCatalog(filtered);
        } else {
            setFilteredCatalog(catalog);
        }
    };

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}



