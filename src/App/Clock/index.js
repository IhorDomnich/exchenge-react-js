import React, { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled";

const fotmatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Date:
            {" "}
            {fotmatDate(date)}
        </Wrapper>
    )

};