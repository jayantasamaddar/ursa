import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavMenu, NavItem } from '../../components/navigation/Navigation';
import { Checkbox } from '../../components/form/Form-Fields';
import { multipassFilter, sortBy } from '../../components/tools';
import { Pagination, ActionButtons, DataTableHeader } from './components';
import Tag from '../../components/ui/Tag';


export default function DataTable({rows, columns, views, rowsPerPage, actionButtons, tableData, className}) {

    /**************************************************************************************************/    
    //    Initialize State
    /*************************************************************************************************/
    const [All] = useState(rows); //all row data received
    const [currentView, setCurrentView] = useState(views[0]); // current view criteria
    const [View, setView] = useState(rows); // contains all rows of the particular view
    const [currentPageNumber, setCurrentPageNumber] = useState(1); // the current page number
    const [currentPage, setCurrentPage] = useState([]); //contains all rows in current page
    const [selectedRows, setSelectedRows] = useState([]); // the selected rows of the current page
    const [checked, setChecked] = useState(false); //All rows, .row-selector checkbox on or off
    const [checkedIndeterminate, setCheckedIndeterminate] = useState(false) // All rows, .page-row-controller indeterminate property on or off

    const checkboxes = document.querySelectorAll(".row-selector");
    const theaders = document.querySelectorAll("th:not(.data-selector):not([data-sort=''])");

    console.log(selectedRows);

    /**************************************************************************************************/    
    //    RESETS
    /*************************************************************************************************/

    /* Reset Selection */
    const resetSelection = () => {
        setChecked(false);
        checkboxes.forEach(checkbox => checkbox.checked = false);
        setSelectedRows([]);
    }

    /* Reset Sort */
    const resetSort = () => theaders.forEach(th => {
        th.dataset.sort = "";
    });

    /* Reset Icons */
    const resetSortIcons = () => theaders.forEach(th => {
        const icon = th.querySelector(".icon");
        icon.classList += " hidden";
        icon.childNodes[0].classList.remove("fa-arrow-up" || "fa-arrow-down");
    });

    /**************************************************************************************************/    
    //    Event Handlers and State Management
    /*************************************************************************************************/
    
    const toggleCheck = () => setChecked(prevState => !prevState);

    const prevPage = () => {
        setCurrentPageNumber(curr => {
            if(curr === 1) return 1;
            resetSelection();
            return curr - 1;
        });
    }

    const nextPage = () => {
        setCurrentPageNumber(curr => {
            if(curr === Math.ceil(View.length/rowsPerPage)) return curr;
            resetSelection();
            return curr + 1;
        });
    }

    const changeView = (event) => {
        resetSelection();
        resetSort();
        resetSortIcons();
        const name = event.target.closest(".views").dataset.name;
        setCurrentView(views.find(view => view.name === name));
    }

    /**** Sort Rows ****/
    const sortRows = (event) => {
        resetSortIcons();
        const data = event.target.closest("th").dataset;
        const icon = event.target.closest("th").querySelector(".icon");
        icon.classList.remove("hidden");
        const sort = data.sort === "asc" ? "desc" : "asc";
        resetSort();

        icon.childNodes[0].classList += sort === "asc" ? " fa-arrow-up" : " fa-arrow-down";
        data.sort = sort;
        const ref = columns.filter(e => e.name === data.name);
        setView(sortBy(ref, View, sort));
    }

    const selectAll = (event) => {
        const el = event.target;
        const tbody = document.querySelector("tbody.data-table-body");
        for(const item of tbody.childNodes) {
            item.childNodes[0].childNodes[0].checked = el.checked ? true : false;
        }
        el.checked ? setSelectedRows(currentPage) : resetSelection();
    }

    const selectRow = (event) => {
        const el = event.target;
        const rowID = el.parentElement.parentElement.dataset.id;

        if(el.checked) {
            const targetRow = currentPage.find(row => rowID === (row.id || row._id)?.toString());
            setSelectedRows(prevRows => [...prevRows, targetRow]);
        } else {
            setSelectedRows(prevRows => prevRows.filter(row => rowID !== (row.id || row._id)?.toString()));
        }
    }

    /**************************************************************************************************/    
    //    useEffect Hooks and Side Effects Management
    /*************************************************************************************************/
    
    /* useEffect:- Control the "checked" state of the selectAll checkbox */
    useEffect(() => {
        if(selectedRows.length === currentPage.length) {
            setChecked(true);
            setCheckedIndeterminate(false);
            if(selectedRows.length > 1) document.querySelector(".page-row-controller").indeterminate = checkedIndeterminate
        }
        if(selectedRows.length === 0 || selectedRows.length < currentPage.length) {
            setChecked(false);
            setCheckedIndeterminate(false);
        }
        if(selectedRows.length > 0 && selectedRows.length < currentPage.length) {
            setCheckedIndeterminate(true);
            document.querySelector(".page-row-controller").indeterminate = checkedIndeterminate;
        }
    },[selectedRows, currentPage,checkedIndeterminate]);

    //console.log(selectedRows);

    // useEffect:- On selection of a View
    useEffect(() => {
        const { filters } = currentView;
        if(currentView && filters && filters.length > 0) 
        { 
            setView(multipassFilter(All, filters)); 
        }       
        else setView(All);

        setCurrentPageNumber(1); // Set default Page Number when a view is selected
    },[currentView, All]);

    /* useEffect:- setCurrentPage data based on PageNumber and Selected View */
    useEffect(() => {
        setCurrentPage(
            currentPageNumber === 1 ? View.slice(0, (View.length > rowsPerPage ? rowsPerPage : View.length)) : 
            View.slice(rowsPerPage * (currentPageNumber - 1), (View.length > rowsPerPage * (currentPageNumber - 1) + rowsPerPage ? rowsPerPage * (currentPageNumber - 1) + rowsPerPage : View.length))
        );
    },[currentPageNumber, View, rowsPerPage]);


    /**************************************************************************************************/    
    //    Passing Data to Parent Component
    /*************************************************************************************************/

    useEffect(() => {
        if(tableData) {
            tableData({ 
                selectedRows
            });
        }
        return;
        
    },[tableData, selectedRows]);

    /**************************************************************************************************/    
    //    RENDER TABLE CONTENT
    /*************************************************************************************************/
    return (
        <div className={`data-table-content pt-8 rounded-t-2xl ${className ? className : ""}`}>
            <div className="toolbar flex justify-between my-20 cursor-pointer">
                <NavMenu NavItems = {
                <>
                {views.map((view, index) => {
                    return (
                    <div className="views" key={view.name} data-name={view.name} data-index={index}>
                        <NavItem className="text-standard" name ={view.title} unlink onClick={changeView} />
                    </div>
                )})}
                </>
                } />
                <NavMenu NavItems = {
                <>
                    <NavItem name = "Filter" icon={<i className="fas fa-filter"></i>} unlink />
                    <NavItem name = "Sort" icon={<i className="fas fa-sort"></i>} unlink />
                    <NavItem name = "Columns" icon={<i className="fas fa-columns"></i>} unlink />
                    <NavItem name = "Menu" icon={<i className="fas fa-bars"></i>} unlink />
                </>
                } />
            </div>

            {selectedRows.length !==0 && 
            <div className="action-bar grid grid-cols-8">
                <div className="button border border-slate-700 hover:bg-sky-600 rounded-tl-2xl">
                    <button className="p-10">
                        <div className="pr-10 inline-block">
                            <Checkbox className="page-row-controller" onClick={toggleCheck} checked={checked} onChange={selectAll} />
                        </div>
                        <div className = "inline-block">
                            <span className="counter pl-3 pr-6">{`${selectedRows.length} selected`}</span>
                        </div>
                    </button>
                </div>

                <ActionButtons buttons={actionButtons} />
            </div>
            }

            <div className="data-table-container overflow-x-auto overscroll-x-contain">
                <table className="data-table border-collapse min-w-max w-full">
                    <thead className={`align-left border border-slate-700 ${selectedRows.length > 0 ? "hidden" : ""}`}>
                        <tr className={`data-table-row`}>
                            <th className="data-table-column data-selector p-10" key={0}>
                                <Checkbox className="select-controller" onClick={toggleCheck} checked={checked} onChange={selectAll} />
                            </th>
                            {columns.map((column, index) => {      
                                return (
                                <Fragment key={column.name}>
                                    <DataTableHeader 
                                    column={column} 
                                    index={index} 
                                    onClick={sortRows} />
                                </Fragment>
                            )})}
                        </tr>
                    </thead>
                    
                    <tbody className="data-table-body border border-slate-700">
                        {currentPage.map((row, index) => {
                            return <tr className="data-table-row border border-slate-700" data-id={row.id || row._id} key={row.id || row._id}>
                                <td className="data-table-cell p-10 cursor-pointer text-center">
                                    <Checkbox className="row-selector" onChange={selectRow} />
                                </td>
                                {columns.map(({name, to}, index)=> {
                                    return (
                                    <td className="data-table-cell p-10 text-slate-400 cursor-pointer" key={index}>
                                        <div className="cell-item p-10">
                                            <span className={`w-auto${to && " hover:text-slate-200"}`} data-name={name} data-status={name.includes("status") ? row[name] : ""}>
                                                {to 
                                                ?   <Link to={
                                                    `${to.slice(0,to.indexOf(":") || to.length)}${to.includes(":") && (row[to.slice(to.indexOf(":") + 1, to.length)] || row["_" + to.slice(to.indexOf(":") + 1, to.length)])}`
                                                    }>
                                                        {row[name]}
                                                    </Link> 
                                                : Array.isArray(row[name]) 
                                                ? <ul className="flex gap-10">{row[name].map((item, indx) => <li key={indx}><Tag name={item} /></li>)}</ul>
                                                : row[name]
                                                }
                                            </span>
                                        </div>
                                    </td>
                                    )
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination 
                view={View} 
                rowsPerPage={rowsPerPage} 
                currentPageNumber={currentPageNumber} 
                prevPage={prevPage}
                nextPage={nextPage} 
            />
        </div>
    );
}