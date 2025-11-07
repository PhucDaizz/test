import React from 'react';
import ConnectionConfig from '../Components/ConnectionConfig';
import RoomInfo from '../components/RoomInfo';

const LobbyPage = (props) => {
  const {
    token, setToken,
    apiBaseUrl, setApiBaseUrl,
    connectionStatus,
    connectToHub,
    roomName, setRoomName,
    flashcardSetId, setFlashcardSetId,
    createRoom,
    joinCode, setJoinCode,
    joinRoom,
    roomCode, 
    roomId,
    userRole,
    isWaitingForAnswer,
    navigateTo,
    roomParticipantsList
  } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">WordWise - Phòng Chờ</h1>
        
        <ConnectionConfig 
          token={token}
          setToken={setToken}
          apiBaseUrl={apiBaseUrl}
          setApiBaseUrl={setApiBaseUrl}
          connectToHub={connectToHub}
          connectionStatus={connectionStatus}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tạo phòng - Giáo viên */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Tạo Phòng (Giáo Viên)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tên Phòng</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  value={roomName} 
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="Nhập tên phòng"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Flashcard Set ID</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  value={flashcardSetId} 
                  onChange={(e) => setFlashcardSetId(e.target.value)} 
                />
              </div>
              <button 
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 text-lg font-semibold"
                onClick={createRoom}
                disabled={connectionStatus !== 'Connected'}
              >
                Tạo Phòng
              </button>
            </div>
          </div>

          {/* Tham gia phòng - Học sinh */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Tham Gia Phòng (Học Sinh)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mã Phòng</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg text-center text-2xl font-mono" 
                  value={joinCode} 
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  placeholder="Nhập mã phòng"
                />
              </div>
              <button 
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 text-lg font-semibold"
                onClick={joinRoom}
                disabled={connectionStatus !== 'Connected'}
              >
                Tham Gia Phòng
              </button>
            </div>
          </div>
        </div>

        {(roomCode || roomId) && (
          <RoomInfo 
            roomCode={roomCode}
            roomId={roomId}
            userRole={userRole}
            isWaitingForAnswer={isWaitingForAnswer}
            roomParticipantsList={roomParticipantsList}
            navigateTo={navigateTo}
          />
        )}
      </div>
    </div>
  );
};

export default LobbyPage;