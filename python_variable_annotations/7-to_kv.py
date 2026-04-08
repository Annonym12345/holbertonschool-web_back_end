#!/usr/bin/env python3
"""Module for key-value transformation"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return tuple with key and square of value"""
    return (k, float(v * v))
