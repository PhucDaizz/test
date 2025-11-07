import React from 'react';
import RoomControl from '../Components/RoomControl';
import Leaderboard from '../Components/Leaderboard';
import LogPanel from '../components/LogPanel';

const TeacherPage = (props) => {
  const {
    navigateTo,
    roomId,
    startRoom,
    nextQuestion,
    finishRoom,
    leaderboard,
    messages,
    signalRMessages,
    roomParticipantsList
  } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600">Trang Kiểm Soát Giáo Viên</h1>
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => navigateTo('lobby')}
          >
            ← Về Phòng Chờ
          </button>
        </div>

        <RoomControl 
          roomId={roomId}
          startRoom={startRoom}
          nextQuestion={nextQuestion}
          finishRoom={finishRoom}
          navigateTo={navigateTo}
        />

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Những người trong phòng:</h3>
          {roomParticipantsList && roomParticipantsList.length > 0 ? (
            <ul className="list-none space-y-2">
              {roomParticipantsList.map((participant) => (
                <li 
                  key={participant.userId || participant.roomParticipantId}
                  className="p-2 bg-gray-100 rounded-md text-gray-800"
                >
                  {participant.username || 'Một người bạn'} 
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Hiện tại chỉ có mình bạn trong phòng.</p>
          )}
        </div>

        {leaderboard.length > 0 && (
          <Leaderboard leaderboard={leaderboard} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LogPanel 
            title="Nhật Ký API" 
            messages={messages} 
            messageType="api" 
          />
          
          <LogPanel 
            title="Sự Kiện SignalR" 
            messages={signalRMessages} 
            messageType="signalr" 
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;