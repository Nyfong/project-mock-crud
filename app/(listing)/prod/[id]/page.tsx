import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>dynamic product page{id}</div>;
}
