/** @format */

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect } from "react";
import { fetchCategories, themes } from "../libs/pageData";
import DropDown from "./DropDown";

function Navbar() {
  const { data, isLoading, error } = useQuery(["category"], fetchCategories);

  const linksData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "New Component",
      link: "/admin/add-component",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"}>
          <a className="btn btn-ghost normal-case text-xl">Doraemon</a>
        </Link>
      </div>
      <DropDown options={themes} />
      <div className="flex-none gap-2 ml-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered "
            disabled={error || isLoading ? true : false}
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
