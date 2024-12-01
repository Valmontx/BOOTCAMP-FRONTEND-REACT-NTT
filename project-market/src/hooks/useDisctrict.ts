
import { Distrito } from "@/domain/cart-types";
import { useEffect, useState } from "react";

export const useDistrict = () => {
    const [districts, setDistricts] = useState<Distrito[]>([]);

    useEffect(() => {
        const getDistrict = async () => {
            try {
                const response = await fetch("/district.json"); 
                const data = await response.json();
                setDistricts(data);
            } catch (error) {
                console.error("Error al cargar los distritos:", error);
                setDistricts([]); 
            }
        };

        getDistrict();
    }, []);

    return {districts};
};
