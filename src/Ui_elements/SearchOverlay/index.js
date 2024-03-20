import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import { GSelectField } from '../SelectField';
import { GTextField } from '../TextField';
import { ItemCard } from './itemCard';
import { useForm } from 'react-hook-form';
import { GButton } from '../Button/button';
import { Empty } from '../Empty';

export const SearchOverlay = ({
    data,
    categories,
    subCategories,
    brands,
    setSearchFilter,
    msrpUpdate,
    handleMSRPFilter,
    showSearch,
    setShowSearch
}) => {

    const ratings = Array.from({ length: 6 }, (_, index) => ({
        value: index,
        label: `${index}`
    }));

    const booleanSelect = [
        {
            value: true,
            label: "True"
        },
        {
            value: false,
            label: "False"
        },
    ]

    const { control, watch } = useForm()

    return (
        <>
            {
                showSearch &&
                <SearchResultsContainer onClick={(e) => {
                    setShowSearch(false)
                }}>
                    <ResutHolder
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p>Filter by extra parameters</p>
                        <FilterContainer>
                            <Controller
                                name='brandId'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Brand"
                                        options={brands}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                brandId: value.value
                                            }))
                                        }
                                        id="brandId"
                                        searchable={true}
                                    />
                                )}

                            />

                            <Controller
                                name='categoryId'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Category"
                                        options={categories}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                categoryId: value.value
                                            }))
                                        }
                                        id="categoryId"
                                        searchable={true}
                                    />
                                )}

                            />
                            <Controller
                                name='subCategoryId'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Sub category"
                                        options={subCategories}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                subCategoryId: value.value
                                            }))
                                        }
                                        id="subCategoryId"
                                        searchable={true}
                                    />
                                )}

                            />

                            <Controller
                                name='rating'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Rating"
                                        options={ratings}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                rating: value.value
                                            }))
                                        }
                                        id="rating"
                                        searchable={true}
                                    />
                                )}

                            />

                            {/* <GTextField
                                placeholder={'MSRP'}
                                onChange={(value) => handleMSRPFilter(value)}
                            /> */}

                            <Controller
                                name='isFeatured'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Featured"
                                        options={booleanSelect}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                isFeatured: value.value
                                            }))
                                        }
                                        id="isFeatured"
                                        searchable={true}
                                    />
                                )}

                            />

                            <Controller
                                name='isTopSeller'
                                control={control}
                                render={({ field }) => (
                                    <GSelectField
                                        {...field}
                                        placeholder="Top Seller"
                                        options={booleanSelect}
                                        onChange={(value) =>
                                            setSearchFilter((prev) => ({
                                                ...prev,
                                                isTopSeller: value.value
                                            }))
                                        }
                                        id="isTopSeller"
                                        searchable={true}
                                    />
                                )}

                            />


                        </FilterContainer>

                        {
                            data?.length > 0 ?
                                data?.map((item, index) =>
                                    <ItemCard key={index} setShowSearch={setShowSearch} item={item} />
                                )
                                :
                                <Empty />
                        }
                        {/* <ItemCard /> */}
                    </ResutHolder>
                </SearchResultsContainer>
            }
        </>

    );
};

const SearchResultsContainer = styled.div`
    width: 100%;
    height: 95vh;
    max-height: 95vh; 
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    position: absolute;
    display: flex;
    align-items: flex-start;

    /* justify-content: center; */
    top: 10vh;
    left: 0;
    z-index: 28;
    padding: 2% 0 2% 22% ;
`;

const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

const ResutHolder = styled.div`
    background-color: white;
    overflow-y: auto;
    max-height: 80vh;
    padding: 2%;
    width: 50vw;
    height: auto;
    border-radius: 12px;
    p{
        margin-bottom: 20px;
    }
` 