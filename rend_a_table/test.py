#!/usr/bin/env python
from poster.encode import multipart_encode
from poster.streaminghttp import register_openers
import urllib2

register_openers()

datagen, headers = multipart_encode({'table1': open("test_table.html", "rb")})
#datagen, headers = multipart_encode([('table1', "This is a test")])
file_content = open("test_table.html", "rb").read()
#datagen, headers = multipart_encode([('table1', file_content)])

request = urllib2.Request('http://33.33.33.10:8888/render', datagen, headers)

print urllib2.urlopen(request).read()

