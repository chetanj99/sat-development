"use client";
import React, { useState, useEffect } from "react";
import { ToWords } from "to-words";

export default function Textarea() {
    const [numberText, setNumberText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [mode, setMode] = useState("check");
    const [currency, setCurrency] = useState("INR");

    const toWords = new ToWords({
        localeCode: currency === "INR" ? "en-IN" : "en-US",
        converterOptions: {
            currency: mode === "currency" || mode === "check",
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
            doNotAddOnly: mode === "check" ? false : true,
            currencyOptions: {
                name:
                    currency === "INR"
                        ? "Rupee"
                        : currency === "USD"
                            ? "Dollar"
                            : currency === "GBP"
                                ? "Pound"
                                : "Euro",
                plural:
                    currency === "INR"
                        ? "Rupees"
                        : currency === "USD"
                            ? "Dollars"
                            : currency === "GBP"
                                ? "Pounds"
                                : "Euros",
                symbol: currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "GBP" ? "£" : "€",
                fractionalUnit: {
                    name:
                        currency === "INR"
                            ? "Paisa"
                            : currency === "USD"
                                ? "Cent"
                                : currency === "GBP"
                                    ? "Penny"
                                    : "Cent",
                    plural:
                        currency === "INR"
                            ? "Paisa"
                            : currency === "USD"
                                ? "Cents"
                                : currency === "GBP"
                                    ? "Pence"
                                    : "Cents",
                    symbol: "",
                },
            },
        },
    });

    useEffect(() => {
        updateOutput(numberText);
    }, [numberText, mode, currency]);

    const handleNumberInputChange = (event) => {
        let value = event.target.value;

        value = value.replace(/,/g, "");
        if (/^[\d.]*$/.test(value)) {
            setNumberText(value);
        }
    };

    const updateOutput = (num) => {
        if (!num || isNaN(num)) {
            setOutputText("");
            return;
        }

        try {
            const converted = toWords.convert(Number(num));
            setOutputText(converted);
        } catch (error) {
            setOutputText("Invalid Number");
        }
    };

    const transformText = (caseType) => {
        let transformedText = outputText;
        switch (caseType) {
            case "uppercase":
                transformedText = outputText.toUpperCase();
                break;
            case "lowercase":
                transformedText = outputText.toLowerCase();
                break;
            case "title":
                transformedText = outputText
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                break;
            case "sentence":
                transformedText =
                    outputText.charAt(0).toUpperCase() +
                    outputText.slice(1).toLowerCase();
                break;
            default:
                break;
        }
        setOutputText(transformedText);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputText);
    };

    return (
        <div className="space-y-5 p-4 sm:p-6 md:p-8">
            <div>
                <label htmlFor="number-input" className="mb-2 sm:text-lg block">
                    Enter the Number
                </label>
                <textarea
                    className="w-full h-32 p-5 border rounded-lg resize-none border-primary focus:ring-2 focus:ring-primary"
                    value={numberText}
                    onChange={handleNumberInputChange}
                    id="number-input"
                />
            </div>
            <div>
                <h2 className="sm:text-lg my-2">Type</h2>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <button
                        className={`px-4 py-2 rounded-lg ${mode === "check" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setMode("check")}
                    >
                        Writing Check?
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${mode === "currency" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setMode("currency")}
                    >
                        Show Currency
                    </button>
                </div>
            </div>
            <div>
                <h2 className="sm:text-lg my-2">Currency</h2>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <button
                        className={`px-4 py-2 rounded-lg ${currency === "INR" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setCurrency("INR")}
                    >
                        Indian Rupees
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${currency === "USD" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setCurrency("USD")}
                    >
                        US Dollar
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${currency === "GBP" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setCurrency("GBP")}
                    >
                        British Pound
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${currency === "EUR" ? "bg-primary text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setCurrency("EUR")}
                    >
                        Euro
                    </button>
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
                    <label htmlFor="converted-words" className="mb-2 md:mb-0 sm:text-lg">
                        The Converted Words
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => transformText("uppercase")}
                        >
                            Uppercase
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => transformText("lowercase")}
                        >
                            Lowercase
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => transformText("title")}
                        >
                            Title
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => transformText("sentence")}
                        >
                            Sentence
                        </button>
                        <button
                            className="px-5 py-1 bg-primary rounded-md text-white"
                            onClick={handleCopy}
                        >
                            Copy
                        </button>
                    </div>
                </div>
                <textarea
                    className="w-full h-32 p-5 border rounded-lg resize-none border-primary mt-2 outline-none"
                    value={outputText}
                    readOnly
                    id="converted-words"
                />
            </div>
        </div>
    );
}
