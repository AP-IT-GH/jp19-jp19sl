import re

prefix = ' '

while prefix != ']C1S0000':
    barcode = input("Scan uw studentenkaart")
    prefix = barcode[0:8]
    if prefix != ']C1S0000':
        print("Geen studentenkaart van AP")
print (barcode[8:14])
print("Prefix is juist studentenkaart van AP")