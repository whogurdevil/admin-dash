"use client";
import React from "react";
import WorldMap from "react-svg-worldmap";
import { CountryContext } from "react-svg-worldmap";
import styles from "@/styles/WorldMapApp.module.scss"; // Import the SCSS module

const stylingFunction = ({
  countryValue,
  minValue,
  maxValue,
}: CountryContext) => {
  const calculatedValue =
    typeof countryValue === "string" ? minValue : countryValue;
  const opacityLevel =
    calculatedValue !== undefined
      ? 0.1 + (1.5 * (calculatedValue - minValue)) / (maxValue - minValue)
      : 10;
  return {
    fill: "white",
    fillOpacity: opacityLevel,
    cursor: "pointer",
    minValue: 1000,
  };
};

export default function App(props: any) {
  const data = props.data.map((item: any) => ({
    country: item.code,
    value: item.value,
  }));

  return (
    <div className={styles.app}>
      <WorldMap
        size="xl"
        data={data}
        backgroundColor="transparent"
        color="white"
        styleFunction={stylingFunction}
      />
    </div>
  );
}
