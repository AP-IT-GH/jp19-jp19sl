import re

prefix = ' '

while prefix != ']C1S0000':
    barcode = input("Scan uw studentenkaart")
    prefix = barcode[0:8]

print("Prefix is juist studentenkaart van AP")