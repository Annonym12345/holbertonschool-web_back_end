# Git Intro Project

┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-simple_helper_function.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """
   3   │ Simple helper function
   4   │ """
   5   │
   6   │
   7   │ def index_range(page: int, page_size: int) -> tuple:
   8   │     """
   9   │     Return start and end index for pagination.
  10   │     """
  11   │     start = (page - 1) * page_size
  12   │     end = page * page_size
  13   │     return start, end
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-simple_pagination.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """
   3   │ Simple pagination
   4   │ """
   5   │
   6   │ import csv
   7   │ from typing import List
   8   │
   9   │
  10   │ def index_range(page: int, page_size: int) -> tuple:
  11   │     """Return start and end index for pagination."""
  12   │     return (page - 1) * page_size, page * page_size
  13   │
  14   │
  15   │ class Server:
  16   │     """Server class to paginate a database of baby names."""
  17   │     DATA_FILE = "Popular_Baby_Names.csv"
  18   │
  19   │     def __init__(self):
  20   │         self.__dataset = None
  21   │
  22   │     def dataset(self) -> List[List]:
  23   │         """Cached dataset."""
  24   │         if self.__dataset is None:
  25   │             with open(self.DATA_FILE) as f:
  26   │                 reader = csv.reader(f)
  27   │                 dataset = list(reader)
  28   │             self.__dataset = dataset[1:]
  29   │         return self.__dataset
