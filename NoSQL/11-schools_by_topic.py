#!/usr/bin/env python3
"""Schools by topic"""


def schools_by_topic(mongo_collection, topic):
    """Return schools matching topic"""
    return mongo_collection.find({"topics": topic})
