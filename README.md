# W04D03 AJAX

### To Do
- [x] Use AJAX to retrieve data from a remote server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a remote server
- [x] All without refreshing the browser

## AJAX

Asynchronous Javascript And XML
eXtensible Markup Language
<name>Jeremy</name>

XmlHttpRequest (XHR)

```js
$.ajax({
  url: 'www.example.com/users',
  method: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log(data);
  },
  error: (error) => {
    console.error(error);
  }
});
```

























### Useful Links
* [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [Post/Redirect/Get (PRG)](https://en.wikipedia.org/wiki/Post/Redirect/Get)
* [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods
