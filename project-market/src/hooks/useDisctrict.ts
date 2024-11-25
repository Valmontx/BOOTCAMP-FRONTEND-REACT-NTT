
import { useEffect, useState } from "react";

export const useDistrict = () => {
    const [districts, setDistricts] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const response = await fetch("/district.json"); 
                const data = await response.json();
                setDistricts(data);
            } catch (error) {
                console.error("Error al cargar los distritos:", error);
            }
        };

        fetchDistricts();
    }, []);

    return districts;
};
