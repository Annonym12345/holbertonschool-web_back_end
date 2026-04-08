#!/usr/bin/env python3
"""Module for multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies by multiplier"""

    def multiply(x: float) -> float:
        """Multiply x by multiplier"""
        return x * multiplier

    return multiply
