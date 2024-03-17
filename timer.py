import datetime
from datetime import timedelta
datetimeFormat = '%Y-%m-%d %H:%M:%S.%f'
  
date2 = datetime.datetime.now()
print(date2)

 
datetimeFormat = '%Y-%m-%d %H:%M:%S.%f'
date1 = '2020-02-25 17:03:58.340619'
date2 = datetime.datetime.now()
diff = datetime.datetime.strptime(str(date2), datetimeFormat)\
    - datetime.datetime.strptime(str(date1), datetimeFormat)
 
print("Difference:", diff)
print("Days:", diff.days)
print("Microseconds:", diff.microseconds)
print("Seconds:", diff.seconds)
s=diff.seconds/60
print(s)
import datetime
old_time = datetime.datetime.now()
a=old_time.strftime('%Y-%m-%d %H:%M:%S.%f')
print("hello"+a)
new_time = old_time - datetime.timedelta(hours=2, minutes=10)
print(new_time)
