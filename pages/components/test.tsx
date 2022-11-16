/** @format */

import React from "react";

type Student = {
  name: string;
  id: number;
  age: number;
};
interface Props {
  student: Student;
}

function test({ student }: Props) {
  student.id = 10;
  return <div>test</div>;
}

export default test;
