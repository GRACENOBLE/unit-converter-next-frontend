"use client";
import Container from "@/components/Container";
import MainForm from "@/components/mainForm";
import Output from "@/components/output";

import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  return (
    <section className="bg-[#f4f4f4] h-screen absolute top-0 w-full">
      <Container>
        <h1 className="font-bold  text-center text-5xl mt-10 mb-20 md:mb-10">
          UNIT CONVERTER
        </h1>
        <div className="grid md:grid-cols-2 ">
          <MainForm setLoading={setLoading} setOutput={setOutput} />
          

          <div className="-order-last md:order-last mx-auto w-[350px]">
            <p className="font-semibold text-sm mb-2">Output</p>
            <Output loading={loading} output={output} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
