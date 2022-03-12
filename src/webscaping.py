import requests # for making standard html requests
from bs4 import BeautifulSoup # magical tool for parsing html data
import json # for parsing data
from pandas import DataFrame as df # premier library for data organization

page = requests.get("https://locations.familydollar.com/id/")
page.encoding = 'ISO-885901' # handle english only 
soup = BeautifulSoup(page.text, 'html.parser')
dollar_tree_list = soup.find_all(class_ = 'itemlist')
for i in dollar_tree_list[:2]:
  print(i)


example = dollar_tree_list[2] # a representative example
example_content = example.contents
print(example_content)