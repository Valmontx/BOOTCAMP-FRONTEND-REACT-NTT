import { CategoryFilterProps } from "../../domain/product"


const CategoryFilter: React.FC<CategoryFilterProps> = ({onCategoryChange}) => {

    return (
        <select  className="select-option" onChange={(e) => onCategoryChange(e.target.value)}>
             <option value="all"> All categories </option>
                <option value="fragrances"> Fragances </option>
                <option value="beauty"> Makeup </option>
                <option value="furniture"> Room accs </option>
        </select>
    )
}

export default CategoryFilter

