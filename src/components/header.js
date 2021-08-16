const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const container = document.createElement('div')
  const spanDate = document.createElement('span')
  const spanTemp = document.createElement('span')
  const heading  = document.createElement('h1')
  container.appendChild(spanDate)
  container.appendChild(heading)
  container.appendChild(spanTemp)
  container.classList.add('header')
  spanDate.classList.add('date')
  spanDate.textContent = date
  heading.textContent = title
  spanTemp.classList.add('temp')
  spanTemp.textContent = temp
  
  return container
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  const newHeader = Header("Lambda school","8/13/2021","104ºF")
  // It should append the header to the element in the DOM that matches the given selector.
  document.querySelector(selector).appendChild(newHeader)
}

export { Header, headerAppender }
