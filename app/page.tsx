'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
    const [value, setValue] = useState('');

    const doCalc = () => {
        // parse ints from value, split by operator, and perform operation
        const parts = value.split(/([+\-])/);
        console.log(parts);

        // Initialize the result with the first number
        let result = parseInt(parts[0]);

        // Iterate through the parts and perform the operations
        for (let i = 1; i < parts.length; i += 2) {
            console.log(parts[i]);
            const operator = parts[i];
            let number = parseInt(parts[i + 1]);
            // if number is undefined, it's an operator. If it's -, multiply by -1, otherwise skip

            if (operator === '+') {
                result += number;
            } else if (operator === '-') {
                result -= number;
            }
        }

        setValue(result.toString());
    };
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Card className="w-full max-w-sm mx-auto">
                    <CardHeader>
                        <CardTitle>Calculator</CardTitle>
                        <CardDescription>
                            It's a calculator. Not much else. Go crazy!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input readOnly value={value} />
                        <div className="grid grid-cols-3 gap-2 pt-4">
                            {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map((key) => (
                                <Button
                                    variant={'outline'}
                                    key={key}
                                    onClick={() => setValue(value + key)}
                                >
                                    {key}
                                </Button>
                            ))}
                            <Button variant={'secondary'} onClick={() => setValue(value + '+')}>
                                +
                            </Button>
                            <Button variant={'secondary'} onClick={() => setValue(value + '-')}>
                                -
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                            <Button variant={'destructive'} onClick={() => setValue('')}>
                                C
                            </Button>
                            <Button
                                className="col-span-2"
                                onClick={() => doCalc()}
                                disabled={!parseInt(value[value.length - 1])}
                            >
                                =
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
