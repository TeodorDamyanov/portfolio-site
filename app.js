window.addEventListener("load", solve);

function solve() {
    const studentNameInput = document.getElementById('student')
    const universityInput = document.getElementById('university')
    const scoreInput = document.getElementById('score')

    const nextBtn = document.getElementById('next-btn')
    const previewListUl = document.getElementById('preview-list')
    const candidatesListUl = document.getElementById('candidates-list')


    nextBtn.addEventListener('click', (e) => {
      if (studentNameInput.value !== '' && universityInput.value !== '' && scoreInput.value !== '') {
        

        const li = document.createElement('li')
        li.setAttribute('class', 'application')

        const article = document.createElement('article')

        const h4 = document.createElement('h4')
        h4.textContent = studentNameInput.value

        const p1 = document.createElement('p')
        p1.textContent = `University: ${universityInput.value}`

        const p2 = document.createElement('p')
        p2.textContent = `Score: ${scoreInput.value}`
        
        const editBtn = document.createElement('button')
        editBtn.textContent = `edit`
        editBtn.setAttribute('class', 'action-btn edit')

        const applyBtn = document.createElement('button')
        applyBtn.textContent = `apply`
        applyBtn.setAttribute('class', 'action-btn apply')

        article.appendChild(h4)
        article.appendChild(p1)
        article.appendChild(p2)

        li.appendChild(article)
        li.appendChild(editBtn)
        li.appendChild(applyBtn)
        previewListUl.appendChild(li)

        nextBtn.disabled = true

        studentNameInput.value = ''
        universityInput.value = ''
        scoreInput.value = ''


        editBtn.addEventListener('click', (e) => {
          studentNameInput.value = h4.textContent
          universityInput.value = p1.textContent.split(' ')[1]
          scoreInput.value = p2.textContent.split(' ')[1]

          previewListUl.innerHTML = ''
          nextBtn.disabled = false
        })

        applyBtn.addEventListener('click', (e) => {
          previewListUl.innerHTML = ''
          li.removeChild(editBtn)
          li.removeChild(applyBtn)
          candidatesListUl.appendChild(li)
          nextBtn.disabled = false
        })
      }
    })
  }
  