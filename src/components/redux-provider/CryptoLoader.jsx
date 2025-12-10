"use client";
import { fetchAllCryptos } from "@/lib/redux/crypto/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CryptoLoader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCryptos());
    const interval = setInterval(() => {
      dispatch(fetchAllCryptos());
    }, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return null;
}
