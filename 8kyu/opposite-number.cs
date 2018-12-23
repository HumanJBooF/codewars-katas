// Very simple, given a number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?


using System;

public class Kata
{
    // first attempt
    // public static int Opposite(int number)
    // {
    //     return number *= -number;
    //     }

    // refactor
    // public static int Opposite(int number) => number *= -1; 

    // final
    public static int Opposite(int number) => -number;
}