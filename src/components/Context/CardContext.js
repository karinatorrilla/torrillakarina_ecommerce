import { createContext, useState } from "react";
export const BagContext = createContext({});

export const BagProvider = ({ children }) => {
    const [bagg, setBagg] = useState([]);

    const clearBag = () => setBagg([]);

    const inBag = (id) => bagg.some((producto) => producto.id === id);

    const addBag = (producto, cantidad) => {
        if (inBag(producto.id)) {
            const newBag = bagg.map((articulo) => {
                if (articulo.id === producto.id) {
                    return {
                        ...articulo,
                        cantidad: cantidad,
                    };
                } else {
                    return articulo;
                }
            });
            setBagg(newBag);
        } else {
            setBagg((product) => [...product, { ...producto, cantidad }]);
        }
    };

    return (
        <BagContext.Provider
            value={{ bagg, setBagg, clearBag, addBag, inBag }}
        >
            {children}
        </BagContext.Provider>
    );
};
