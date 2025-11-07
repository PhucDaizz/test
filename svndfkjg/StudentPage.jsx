import React from 'react';
import QuestionPanel from '../Components/QuestionPanel';
import AnswerResult from '../Components/AnswerResult';
import Leaderboard from '../Components/Leaderboard';

const StudentPage = (props) => {
  const {
    navigateTo,
    currentQuestion,
    answerText,
    setAnswerText,
    handleAnswerKeyPress,
    isWaitingForAnswer,
    submitAnswer,
    lastAnswerResult,
    leaderboard,
    connectionStatus,
    roomId,
    currentFlashcardId,
    roomParticipantsList
  } = props;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Trang Chơi Game</h1>
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => navigateTo('lobby')}
          >
            ← Về Phòng Chờ
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
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

        <QuestionPanel 
          currentQuestion={currentQuestion}
          answerText={answerText}
          setAnswerText={setAnswerText}
          handleAnswerKeyPress={handleAnswerKeyPress}
          isWaitingForAnswer={isWaitingForAnswer}
          submitAnswer={submitAnswer}
          currentFlashcardId={currentFlashcardId}
        />

        <AnswerResult lastAnswerResult={lastAnswerResult} />

        {leaderboard.length > 0 && (
          <Leaderboard leaderboard={leaderboard} isCompact={true} />
        )}

        <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
          <h3 className="text-lg font-semibold mb-2">Thông Tin Kết Nối</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-gray-600">SignalR</div>
              <div className={`font-semibold ${connectionStatus === 'Connected' ? 'text-green-600' : 'text-red-600'}`}>
                {connectionStatus}
              </div>
            </div>
            <div className="text-center">
              <div className="text-gray-600">Room ID</div>
              <div className="font-mono text-xs">{roomId || 'N/A'}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600">Flashcard ID</div>
              <div className="font-mono text-xs">{currentFlashcardId || 'N/A'}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600">Trạng Thái</div>
              <div className="font-semibold">{isWaitingForAnswer ? 'Đang chờ...' : 'Sẵn sàng'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;