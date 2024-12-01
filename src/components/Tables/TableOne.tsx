"use client";

import { BRAND } from "@/types/brand";
import Image from "next/image";
import { useState } from "react";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/webserver.jpg",
    name: "Web Server",
    time: "2024-01-01 12:00:00",
    log: "GET /index.html HTTP/1.1 200 1024",
  },
  {
    logo: "/images/brand/webserver.jpg",
    name: "Web Server",
    time: "2024-01-01 12:01:00",
    log: "Data updated",
  },
  {
    logo: "/images/brand/firewall.jpg",
    name: "Firewall",
    time: "2024-01-01 12:02:00",
    log: "log_id=0100020001 type=traffic subtype=forward src_ip=192.168.1.10 dst_ip=8.8.8.8 action=accept",
  },
  {
    logo: "/images/brand/firewall.jpg",
    name: "Firewall",
    time: "2024-01-01 12:03:00",
    log: "log_id=0100020001 type=traffic subtype=forward src_ip=192.168.1.10 dst_ip=8.8.8.8 action=accept",
  },
  {
    logo: "/images/brand/firewall.jpg",
    name: "Firewall",
    time: "2024-01-01 12:03:00",
    log: "log_id=0100020001 type=traffic subtype=forward src_ip=192.168.1.10 dst_ip=8.8.8.8 action=accept",
  },
  {
    logo: "/images/brand/router.jpg",
    name: "Router",
    time: "2024-01-01 12:04:00",
    log: "%SYS-5-CONFIG_I: Configured from console by akroh on vty0 (10.100.11.10)",
  },
  {
    logo: "/images/brand/firewall.jpg",
    name: "Firewall",
    time: "2024-01-01 12:03:00",
    log: "log_id=0100020001 type=traffic subtype=forward src_ip=192.168.1.10 dst_ip=8.8.8.8 action=accept",
  },
  {
    logo: "/images/brand/router.jpg",
    name: "Router",
    time: "2024-01-01 12:04:00",
    log: "%SYS-5-CONFIG_I: Configured from console by akroh on vty0 (10.100.11.10)",
  },
  {
    logo: "/images/brand/router.jpg",
    name: "Router",
    time: "2024-01-01 12:04:00",
    log: "%SYS-5-CONFIG_I: Configured from console by akroh on vty0 (10.100.11.10)",
  },
];

const TableOne = () => {
  const [selectedDevice, setSelectedDevice] = useState("All");

  const filteredData = brandData.filter((brand) => {
    if (selectedDevice === "All") return true;
    return brand.name.toLowerCase() === selectedDevice;
  });

  return (
    <div>
      <div className="mb-4">
        <select
          className="mt-2 w-60 rounded-lg border border-stroke bg-transparent px-5 py-3 outline-none focus:border-primary dark:border-dark-3 dark:bg-gray-dark"
          value={selectedDevice}
          onChange={(e) => setSelectedDevice(e.target.value)}
        >
          <option value="" disabled>
            デバイスを選択
          </option>
          <option value="All">All</option>
          <option value="firewall">Firewall</option>
          <option value="web server">Web Server</option>
          <option value="router">Router</option>
        </select>
      </div>
      <div className="mt-9 rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-col">
          <div className="grid grid-cols-[150px,200px,1fr]">
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Source
              </h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Time
              </h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Log
              </h5>
            </div>
          </div>

          {filteredData.map((brand, key) => (
            <div
              className={`grid grid-cols-[150px,200px,1fr] ${
                key === filteredData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3.5 px-2 py-4">
                <div className="flex-shrink-0">
                  <Image
                    src={brand.logo}
                    alt="Brand"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <p className="hidden font-medium text-dark dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>
              <div className="flex items-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {brand.time}
                </p>
              </div>

              <div className="flex items-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {brand.log}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOne;
