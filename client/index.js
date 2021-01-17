const classroomTable = document.getElementById('classroom-table')
const studentsTable = document.getElementById('students-table')
const scheduleTable = document.getElementById('schedule-table')

const IP = 'http://192.168.1.105:3000'

const urls = [
    `${IP}/classroom`,
    `${IP}/student`,
    `${IP}/schedule`
]

const requests = urls.map(url => fetch(url))

const getClassroom = async () => {
    try {

        const [classrooms, students, schedule] = await Promise.all(requests)

        const roomsData = await classrooms.json()
        const scheduleData = await schedule.json()
        const studentsData = await students.json()

        render(classroomTable, roomsData, item => roomCard(item))
        render(scheduleTable, scheduleData, item => scheduleCard(item))
        render(studentsTable, studentsData, item => studentCard(item))
        
    } catch (err) {
        console.log(err)
    } 
}

const roomCard = item =>`
        <div class="card">
            <div class="card-body">
                <p>id ${item.id}</p>
                <p>number ${item.number}</p>
                <p>roominess ${item.roominess}</p>
            </div>
        </div>
    `
const scheduleCard = item =>`
    <div class="card">
        <div class="card-body">
            <p>id ${item.id}</p>
            <p>day ${item.day_}</p>
            <p>subject ${item.subject}</p>
            <p>time ${item.time}</p>
        </div>
    </div>
`    

const studentCard = item =>`
    <div class="card">
        <div class="card-body">
            <p>id ${item.id}</p>
            <p>name ${item.first_name}</p>
            <p>surname ${item.second_name}</p>
        </div>
    </div>
`

const render = (html, data, callback) => html.innerHTML = data.map(callback).join('')

getClassroom()