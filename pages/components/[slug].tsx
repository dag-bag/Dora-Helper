/** @format */

import { GetServerSideProps } from "next";
import React from "react";
import Code from "../../components/Code";
import connector from "../../libs/connector";
import Component from "../../Models/Component";
import { ComponentProps } from "../../types/component";

type Props = {
  components: ComponentProps[];
};

const Slug = ({ components }: Props) => {
  console.log(components);
  return (
    <div className="space-y-14">
      {components.map((item, i) => {
        return <Code key={i} {...item} />;
      })}
    </div>
  );
};

export default Slug;

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connector;
  const components = await Component.find({
    category: context?.params?.slug,
  });
  return {
    props: {
      components: JSON.parse(JSON.stringify(components)),
    },
  };
};
