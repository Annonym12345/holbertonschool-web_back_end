# Git Intro Project

─┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-list_databases
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ show dbs
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 10-update_topics.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Update topics"""
   3   │
   4   │
   5   │ def update_topics(mongo_collection, name, topics):
   6   │     """Update topics based on name"""
   7   │     mongo_collection.update_many(
   8   │         {"name": name},
   9   │         {"$set": {"topics": topics}}
  10   │     )
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 11-schools_by_topic.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Schools by topic"""
   3   │
   4   │
   5   │ def schools_by_topic(mongo_collection, topic):
   6   │     """Return schools matching topic"""
   7   │     return mongo_collection.find({"topics": topic})
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 12-log_stats.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Log stats"""
   3   │
   4   │ from pymongo import MongoClient
   5   │
   6   │
   7   │ if __name__ == "__main__":
   8   │     client = MongoClient("mongodb://127.0.0.1:27017")
   9   │     collection = client.logs.nginx
  10   │
  11   │     print(f"{collection.count_documents({})} logs")
  12   │
  13   │     print("Methods:")
  14   │     for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
  15   │         count = collection.count_documents({"method": method})
  16   │         print(f"\tmethod {method}: {count}")
