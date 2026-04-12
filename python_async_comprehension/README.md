──┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-async_generator.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Async Generator"""
   3   │
   4   │ import asyncio
   5   │ import random
   6   │
   7   │
   8   │ async def async_generator():
   9   │     """Yield 10 random numbers between 0 and 10"""
  10   │     for _ in range(10):
  11   │         await asyncio.sleep(1)
  12   │         yield random.uniform(0, 10)
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-async_comprehension.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Async Comprehension"""
   3   │
   4   │ async_generator = __import__('0-async_generator').async_generator
   5   │
   6   │
   7   │ async def async_comprehension():
   8   │     """Return 10 random numbers"""
   9   │     return [i async for i in async_generator()]
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-measure_runtime.py
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ #!/usr/bin/env python3
   2   │ """Measure runtime"""
   3   │
   4   │ import asyncio
   5   │ import time
   6   │
   7   │ async_comprehension = __import__('1-async_comprehension').async_comprehension
   8   │
   9   │
  10   │ async def measure_runtime():
  11   │     """Execute async_comprehension 4 times in parallel"""
  12   │     start = time.time()
  13   │
  14   │     await asyncio.gather(
  15   │         async_comprehension(),
  16   │         async_comprehension(),
  17   │         async_comprehension(),
  18   │         async_comprehension()
