#!/usr/bin/env python3
"""List all documents"""


def list_all(mongo_collection):
    """Return list of all documents"""
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
